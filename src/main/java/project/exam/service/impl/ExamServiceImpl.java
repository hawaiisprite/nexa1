package project.exam.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.cmmn.EgovAbstractServiceImpl;
import org.egovframe.rte.fdl.cmmn.exception.FdlException;
import org.egovframe.rte.fdl.idgnr.EgovIdGnrService;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro17.xapi.data.DataSet;

import project.exam.dao.ExamDAO;
import project.exam.service.ExamService;
@Service("examService")
public class ExamServiceImpl extends EgovAbstractServiceImpl implements ExamService {

	@Resource(name = "examDAO")
	private ExamDAO examDAO;
    /** ID Generation */
    @Resource(name = "egovIdGnrService")
    private EgovIdGnrService egovIdGnrService;
	
	@Override
	public List<Map<String, Object>> selectSampleList(Map<String, String> searchInfo) {
		return examDAO.selectSampleList(searchInfo);
	}


	@Override
	public void updateSampleList(List<Map<String, Object>> sampleList) throws NexacroException {
		 int size = sampleList.size();
	        for (int i=0; i<size; i++) {
	          Map<String,Object> sample = sampleList.get(i);
	          
	          int dataRowType = Integer.parseInt(String.valueOf(sample.get(DataSetRowTypeAccessor.NAME)));
	        
	          if (dataRowType == DataSet.ROW_TYPE_INSERTED){
		            String maxNo = examDAO.selectMaxNoPerExam();
					sample.replace("id", maxNo);
					examDAO.insertSampleList(sample);
	          }
	          else if (dataRowType == DataSet.ROW_TYPE_UPDATED){
	        	  examDAO.updateSampleList(sample);
	          }
	          else if (dataRowType == DataSet.ROW_TYPE_DELETED){
	        	  examDAO.deleteSampleList(sample);
	          }
	        }
	}

}
