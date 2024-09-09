import { HomeProjects } from "../_variables/Variables";
export default function Project() {
  return (
    <main>
      <div>
        {HomeProjects.map((el, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="my-4 border-t border-gray-200 dark:border-neutral-800 mb-7 mt-8"></div>
    </main>
  );
}
