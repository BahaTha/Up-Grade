package Services;

import com.example.demo.entity.Course;
import com.example.demo.repository.CoursesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class CourseService {
    private final CoursesRepository coursesRepo;

    @Autowired
    public CourseService(CoursesRepository CoursesRepo) {
        this.coursesRepo = CoursesRepo;
    }

    public Course addCourse(Course Course) {
        Course.setId(0);
        return coursesRepo.save(Course);
    }

    public List<Course> findAllCourses() {
        return coursesRepo.findAll();
    }

    public Course updateCourse(Course Course) {
        return coursesRepo.save(Course);
    }

    public Course findCourseById(Long id) {
        return coursesRepo.findCourseById(id);
                
    }

    public void deleteCourse(Long id){
        coursesRepo.deleteCourseById(id);
    } }