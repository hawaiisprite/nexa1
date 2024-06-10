package project.exam.dao;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.EgovAbstractMapper;
import org.springframework.stereotype.Repository;

@Repository("examDAO")
public class ExamDAO extends EgovAbstractMapper {

	public List<Map<String, Object>> selectSampleList(Map<String, String> searchInfo) {
		return selectList("selectSampleList", searchInfo);
	}

	public void insertSampleList(Map<String, Object> sample) {
		insert("insertSampleList", sample);
	}

	public void updateSampleList(Map<String, Object> sample) {
		update("updateSampleList", sample);

	}

	public void deleteSampleList(Map<String, Object> sample) {
		delete("deleteSampleList", sample);

	}

	public String selectMaxNoPerExam() {
		return selectOne("selectMaxNoPerExam");
	}

}
