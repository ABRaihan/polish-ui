/**
 * dynamic classNames execute
 */

type ClassObject = { [key: string]: boolean };
type ClassesArrayType = Array<string | ClassObject>;
type ClassesType = Array<string | ClassObject | ClassesArrayType>;

export default function classNames(...classes: ClassesType): string {
  const classArray = classes.flat().map((classItem: string | ClassObject) => {
    // only object types are allowed. here map from object keys
    if (typeof classItem === "object" && !Array.isArray(classItem) && classItem !== null) {
      const keys = Object.keys(classItem).filter((key) => Boolean(classItem[key]));
      return keys;
    }
    return classItem;
  });
  return classArray
    .flatMap((item: string | ClassesArrayType) => item)
    .filter(Boolean)
    .join(" ");
}
