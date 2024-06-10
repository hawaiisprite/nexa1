(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeft");
            this.set_titletext("LeftFrame");
            this.set_cssclass("frm_LF_Bg");
            this.set_background("#42458C");
            if (Form == this.constructor)
            {
                this._setFormPosition(210,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101000</Col></Row><Row><Col id=\"MENU_ID\">10101001</Col></Row><Row><Col id=\"MENU_ID\">10101002</Col></Row><Row><Col id=\"MENU_ID\">10101003</Col></Row><Row><Col id=\"MENU_ID\">10101004</Col></Row><Row><Col id=\"MENU_ID\">10101005</Col></Row><Row><Col id=\"MENU_ID\">10101006</Col></Row><Row><Col id=\"MENU_ID\">10101010</Col></Row><Row><Col id=\"MENU_ID\">10101011</Col></Row><Row><Col id=\"MENU_ID\">10101012</Col></Row><Row><Col id=\"MENU_ID\">10101013</Col></Row><Row><Col id=\"MENU_ID\">10101014</Col></Row><Row><Col id=\"MENU_ID\">10101015</Col></Row><Row><Col id=\"MENU_ID\">10101016</Col></Row><Row><Col id=\"MENU_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301000</Col></Row><Row><Col id=\"MENU_ID\">10301001</Col></Row><Row><Col id=\"MENU_ID\">10301002</Col></Row><Row><Col id=\"MENU_ID\">10301003</Col></Row><Row><Col id=\"MENU_ID\">10301004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_EN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLnb","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,null,"0","82",null,null,null,null,this.divLnb.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LF_MenuBg");
            this.divLnb.addChild(obj.name, obj);

            obj = new Grid("grdMenu","1","94",null,null,"1","0",null,null,null,null,this.divLnb.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_background("#42458C");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LV\" treestartlevel=\"0\" cssclass=\"expr:MENU_LV==&apos;1&apos;?&apos;cell_LF_Lev&apos;:&apos;&apos;\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.divLnb.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","30","128",null,null,"1","0",null,null,null,null,this.divLnb.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMyMenu");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj.set_background("#42458C");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.divLnb.addChild(obj.name, obj);

            obj = new PopupDiv("pdivSearchMenu","226","44","210","220",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Sch");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","20","10",null,null,"0","0",null,null,null,null,this.pdivSearchMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenuSearch");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdivSearchMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLnb.form
            obj = new Layout("default","",0,0,this.divLnb.form,function(p){});
            this.divLnb.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivSearchMenu.form
            obj = new Layout("default","",0,0,this.pdivSearchMenu.form,function(p){});
            this.pdivSearchMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",210,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmLeft.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvMenuStatus	= "close";		// Left 메뉴 접기/펼치기 상태값 (open, close)
        this.fvIsBackSpace 	= "N";			// 메뉴검색에서 백스페이스 눌렀는 지 여부
        this.fvMenuType		= "menu";		// menu, mymenu
        this.fvMyMenuEdit	= false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnload(obj); //필수함수

        	this.divLnb.form.set_scrollbartype("none");
        	// 그리드 Row Size 셋팅
        	this.fnSetGridRowSize();
        	this.createMenu();
          };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	// 해당 메뉴를 즐겨찾기 목록에서 삭제하시겠습니까?
        	if(sMsgId =="msg.confirm")
        	{
        		if(sVal == true)
        		{
        			var delRow = this.objApp.gdsMyMenu.getColumn(this.objApp.gdsMyMenu.rowposition, "MENU_ID");
        			this.objApp.gdsMyMenu.deleteRow(delRow);

        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
         * @description 좌측 메뉴 변경
         * @param 필수 {string} sClickMenuId – 클릭한 메뉴 ID
         */
        this.fnChangeLeftMenu = function(sClickMenuId)
        {
        	var nClickMenuRow = -1;
        	var nFirstMenuRow = -1;

        	nFirstMenuRow = this.gfnFindData(this.objApp.gdsMenu, this.FRAME_MENUCOLUMNS.menuId, this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	nClickMenuRow = this.gfnFindData(this.objApp.gdsMenu, this.FRAME_MENUCOLUMNS.menuId, sClickMenuId);

        	if( nClickMenuRow > -1 ) {
        		this.fnSetGridRowSize();
        	}
        };

        /**
         * @description 메뉴 접기/펼치기 상태값 가져오기
         */
        this.fnGetMenuOpenClose = function()
        {
        	return this.fvMenuStatus;
        };

        /**
         * @description 메뉴 접기/펼치기 상태값 셋팅
         */
        this.fnSetMenuOpenClose = function(sStatus)
        {
        	if (sStatus == "open")
        	{
        		this.gfnShowLeftFrame();
        	} else if (sStatus == "close")
        	{
        		this.gfnHideLeftFrame();
        	}
        };

        /**
         * @description FORM오픈 [공통함수호출]
        */
        this.fnFormOpen = function (sMenuId, objParam)
        {
        	if(this.gfnIsNull(sMenuId)) return;

        	this.gfnOpenMenu(sMenuId, objParam, false);
        };

        /**
         * @description 그리드 RowSize 셋팅
        */
        this.fnSetGridRowSize = function()
        {
        	var objGrid = this.divLnb.form.grdMenu;
        	objGrid.set_enableredraw(false);

        	for(var i=0; i < this.dsMenu.rowcount; i++)
        	{
        		var grdRow = objGrid.getTreeRow(i);
        		var css = objGrid.getCellPropertyValue(grdRow, 0, "cssclass");

        		if( css == "cell_LF_Lev"){
        			objGrid.setRealRowSize(grdRow,"50");
        		}else{
        			objGrid.setRealRowSize(grdRow,"28");
        		}
        	}
        	objGrid.set_enableredraw(true);
        };



        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 그리드 메뉴 click
         */
        this.grdMenu_oncellclick = function(obj,e)
        {
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);

        	// true 는 false 로 false 는 true 로 변경^1
        	var nStat = obj.getTreeStatus(nRow)^1;

        	// 자식이 없으면
        	if(nStat != 2) obj.setTreeStatus(nRow ,nStat);

        	// Click시 해당 메뉴 호출
        	var sMenuId = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        	var sPageUrl = this.dsMenu.getColumn(this.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);

        	if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))){
        		// 메뉴 화면 호출
        		this.fnFormOpen(sMenuId);
        	}
        };


         this.createMenu = function()
         {
        	var objApp = nexacro.getApplication();
         	this.divLnb.form.grdMenu.set_enableevent(false);
        	this.divLnb.form.grdMenu.set_enableredraw(false);
        	this.objApp.gvFrmLeft.form.dsMenu.set_enableevent(false);

        	this.divLnb.form.grdMenu.set_binddataset("");
        	this.divLnb.form.grdMenu.set_treeinitstatus("expand,all");

        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " != '0'" ;
        	objApp.gdsMenu.filter(sFilter);
        	this.dsMenu.copyData(objApp.gdsMenu, true);


        	// Left 메뉴 열린상태가 아닐 경우, 열어주기
        	if (this.fnGetMenuOpenClose() != "open") {
        		this.fnSetMenuOpenClose("open");
        	}
        	this.divLnb.form.grdMenu.set_binddataset("dsMenu");
        	this.divLnb.form.grdMenu.set_enableevent(true);
        	this.divLnb.form.grdMenu.set_enableredraw(true);
        	this.dsMenu.set_enableevent(true);
        	var sMenuId = this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId);

        	// 클릭한 Top 메뉴에 해당하는 SubMenu(Left) 셋팅
        	this.fnChangeLeftMenu(sMenuId);
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divLnb.form.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.divLnb.form.grdMyMenu.addEventHandler("oncellclick",this.divLnb_grdMyMenu_oncellclick,this);
            this.pdivSearchMenu.form.grdMenuList.addEventHandler("oncellclick",this.pdivSearchMenu_grdMenuList_oncellclick,this);
            this.pdivSearchMenu.form.grdMenuList.addEventHandler("onkeyup",this.pdivSearchMenu_grdMenuList_onkeyup,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
