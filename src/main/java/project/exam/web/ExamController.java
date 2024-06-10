package project.exam.web;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import project.exam.service.ExamService;

@Controller
public class ExamController {
	
    @Resource(name = "examService")
    private ExamService examService;
	
	
	private Logger logger = LoggerFactory.getLogger(ExamController.class);
	
	@RequestMapping(value = "/exam/test.do")
	public String getExamMainPage(HttpServletRequest request, ModelMap model) {
		return "";
	}
	
	@RequestMapping(value = "/exam/jusoopenapipopup.do")
	public String jusoopenapipopup(HttpServletRequest request, ModelMap model) {
		return "/project/jusoopenapipopup";
	}
	
	
	
    @RequestMapping(value = "/selectSampleList.do")
    public NexacroResult selectSampleList( @ParamDataSet(name = "input1", required = false) Map<String,String> ds_search) 
    {
       logger.debug("ds_search >>> " + ds_search);
	   List<Map<String, Object>> sampleList  = examService.selectSampleList(ds_search);
	   NexacroResult result = new NexacroResult();
       result.addDataSet("output1", sampleList);
       return result;
    }
    
    
    
    @RequestMapping(value = "/updateSampleList.do")
    public NexacroResult updateSampleList(@ParamDataSet(name = "input1") List<Map<String,Object>> updateSampleList) {
       try { 
    	examService.updateSampleList(updateSampleList);
        NexacroResult result = new NexacroResult();
        return result;
       }catch(Exception ex) {
    	   
    	   
       }
       return null;
    } 
}
