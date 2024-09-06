import { useState } from "react";

export default function BoardAssignment() {
  let decadentDesserts = { label: "Decadent Desserts" };
  let lateNightSnack = { label: "A Late Night Snack" };
  let brunch = { label: "Brunch" };
  const boards = [decadentDesserts, lateNightSnack, brunch];
  const [boardName, setName] = useState(boards[0]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((data,id) => 
          <option value = {data} key={id}>{data.label}</option>
        )}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}

// boardName = "no boards yet!";

//    const [myValue, setMyValue] = useState("");

//    return (
//      <div>
//        <select
//          onChange={(e) => setMyValue(e.target.value)}
//          defaultValue={myValue}
//        >
//          <option>Option 1</option>
//          <option>Option 2</option>
//          <option>Option 3</option>
//        </select>
//        <h2>
//          {" "}
//          You selected{" "}
//          <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
//        </h2>
//      </div>
//    );
//  }
// const options = ["options 1", "option 2", "option 3"];
// const [myValue, setMyValue] = useState(options[0]);

// return (
//   <div>
//     <select
//       onChange={(e) => setMyValue(e.target.value)}
//       defaultValue={myValue}
//     >
//       {options.map((option, idx) => (
//         <option key={idx}>{option}</option>
//       ))}
//     </select>
//     <h2>
//       {" "}
//       You selected{" "}
//       <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
//     </h2>
//   </div>
// )
