import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CourseCard'
import OnlineCourses from './OnlineCourse'

const CourseHome = () => {
  return (
   <>
   <Back title='Explore Courses'/>
   <CoursesCard />
   <OnlineCourses />
   </>
  )
}

export default CourseHome
