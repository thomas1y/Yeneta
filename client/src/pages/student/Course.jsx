import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  // Convert to number and fallback if invalid
  const averageRating = Number(course.averageRating) || 4.3;
  const ratingCount = course.courseRatings?.length || 123;

  return (
    <Link to={`/course-detail/${course._id}`}>
      <Card className="border border-gray-500/30 dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="course"
            className="w-full h-36 object-cover rounded-t-lg"
          />
        </div>
        <CardContent className="px-5 py-4 space-y-3 text-left">
          <h1 className="hover:underline font-bold text-lg truncate">{course.courseTitle}</h1>

          {/* Star Rating */}
          <div className="flex items-center gap-1 text-sm">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">
                {i < Math.floor(averageRating) ? "⭐" : "☆"}
              </span>
            ))}
            <span className="ml-1 text-gray-700">{averageRating.toFixed(1)}</span>
            <span className="ml-1 text-gray-500">({ratingCount})</span>
          </div>

          {/* Creator and Level stacked vertically */}
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-sm">{course.creator?.name}</h1>
            <Badge className="bg-zinc-700 text-white px-2 py-1 text-xs rounded-full w-max">
              {course.courseLevel}
            </Badge>
          </div>

          <div className="text-lg font-bold">
            <span>${course.coursePrice}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
