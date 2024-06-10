<%@ page import = "java.net.MalformedURLException" %>
<%@ page import = "java.net.URL" %>
<%@ page import = "java.net.URLEncoder" %>
<%@ page import = "java.util.List" %>

<%@ page import = "javax.xml.parsers.DocumentBuilder" %>
<%@ page import = "javax.xml.parsers.DocumentBuilderFactory" %>

<%@ page import = " org.w3c.dom.Document" %>
<%@ page import = " org.w3c.dom.Element" %>
<%@ page import = " org.w3c.dom.Node" %>
<%@ page import = " org.w3c.dom.NodeList" %>

<%@ page import = "com.nexacro17.xapi.data.*" %>
<%@ page import = "com.nexacro17.xapi.tx.*" %>  

<%@ page contentType = "text/xml; charset=UTF-8" %>
<%!

public String getTagValue(String tag, Element eElement) {
    NodeList nlList = eElement.getElementsByTagName(tag).item(0).getChildNodes();
    Node nValue = (Node) nlList.item(0);
    if(nValue == null) 
        return null;
    return nValue.getNodeValue();
}

public DataSet getAddrApi(String currentPage, String countPerPage, String confmKey, String keyword) throws Exception
{        
  // OPEN API
  String apiUrl = "https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage="+currentPage
  +"&countPerPage="+countPerPage+"&keyword="+URLEncoder.encode(keyword,"UTF-8")
  +"&confmKey="+confmKey+"&resultType="+"XML";
  
   /*XML 파싱하여 Dataset에 추가*/
   DocumentBuilderFactory dbFactoty = DocumentBuilderFactory.newInstance();
   DocumentBuilder dBuilder = dbFactoty.newDocumentBuilder();
   Document doc = dBuilder.parse(apiUrl);

  //파싱할 tag 목록
   NodeList nList = doc.getElementsByTagName("juso"); 
 /********* Dataset Create ************/
  DataSet ds = new DataSet("dsjuso");
  ds.addColumn("postcode",DataTypes.STRING, 256);
  ds.addColumn("roadaddress",DataTypes.STRING, 256);
  ds.addColumn("jibunaddress",DataTypes.STRING, 256);
  
  //xml의 tag정보를 사용하여 데이터 입력
  int row = 0;
   for(int temp = 0; temp < nList.getLength(); temp++){
    Node nNode = nList.item(temp);
    if(nNode.getNodeType() == Node.ELEMENT_NODE){
      
      Element eElement = (Element) nNode;
            
      row = ds.newRow();
      //zipNo:우편번호, roadFullAddr:도로명주소, jibunAddr:지번주소
      ds.set(row, "postcode", getTagValue("zipNo", eElement));    
      ds.set(row, "roadaddress", getTagValue("roadAddr", eElement));
      ds.set(row, "jibunaddress", getTagValue("jibunAddr", eElement));         
    }
  }
  
  return ds;
}%>
<%
PlatformData pdata = new PlatformData();

HttpPlatformRequest req = new HttpPlatformRequest(request);
req.receiveData();
    
PlatformData reqdata = req.getData();
VariableList varList = reqdata.getVariableList();
 /* 요청변수
       confmKey : 승인키(필수), currentPage : 현재 페이지 번호 (필수/기본값 1),
       countPerPage : 페이지당 출력 할 결과 Row 수 / 0<n<=100 (필수/기본값 10),
       keyword : 주소 검색어 (필수), resultType : 검색결과형식 (XML,JSON/ 기본값 XML)
       hstyYn : 변동된 주소정보 포함 여부 (YorN/기본값 N), firstSort : 정확도 정렬 우선정렬/도로명,지번 포함,
       addInfoYn : 출력결과에 추가항목 제공여부 */
String currentPage  = varList.getString("currentPage");
String countPerPage  = varList.getString("countPerPage");
String keyword  = varList.getString("keyword");
String confmKey  = "devU01TX0FVVEgyMDIxMDEwODEzNDY0MjExMDY0NDA=";

int nErrorCode = 0;
String strErrorMsg = "START";
int nSearchCount = 0;

try 
{
  DataSet dsjuso = getAddrApi(currentPage,countPerPage,confmKey,keyword);
  
    /********* Adding Dataset to PlatformData ************/
    pdata.addDataSet(dsjuso);
    
    nErrorCode = 0;
    strErrorMsg = "SUCC";
}
catch(Exception e) {
    nErrorCode = -1;
    strErrorMsg = e.getMessage();
}

PlatformData senddata = new PlatformData();
VariableList sendList = senddata.getVariableList();
sendList.add("ErrorCode", nErrorCode);
sendList.add("ErrorMsg", strErrorMsg);
sendList.add("ErrorMsg", strErrorMsg);

/******** XML data Create ******/
HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(pdata);
res.sendData();
%> 