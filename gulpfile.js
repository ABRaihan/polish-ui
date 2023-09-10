import { deleteAsync } from "del";
import gulp from "gulp";

gulp.task("delete", () => {
  return deleteAsync(["./lib"]);
});

gulp.task("default", gulp.series("delete"));
