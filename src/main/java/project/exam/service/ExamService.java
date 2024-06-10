package project.exam.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.NexacroException;

public interface ExamService {
    List<Map<String,Object>> selectSampleList(Map<String,String> searchInfo);

	void updateSampleList(List<Map<String, Object>> updateSampleList) throws NexacroException;

}
	