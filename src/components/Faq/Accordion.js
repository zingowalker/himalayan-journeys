export default function Accordion(props) {
  return (
    <div className="border rounded-md mb-1 dark:text-light">
      <button
        className="w-full p-4 text-left hover:bg-gray transition duration-300 font-semibold"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }  
          transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && <div className="p-4">{props.data}</div>}
    </div>
  );
}
