import React, { useState } from 'react';


// Robs version from class
const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);
    
    function handleClick() {
        //subtract count
        if (count != 0) {
          setCount(count - 1);  
        }
    }
    
    return (
        <div>
            <p>
                {count != 0 ? `${count} little monkies jumping` : `no more monkeys jumping on the bed`}
            </p>
        <button onClick={handleClick}>Click Here</button>
    </div>
    );
};
    




//marcos version
// import React, { useState } from "react";
// const TenLittleMonkeys = () => {
//   const [monkeyCount, setMonkeyCount] = useState(10);
//   const totalMonkeys =
//     monkeyCount > 0
//       ? `${monkeyCount} little monkeys jumping on the bed one fell off and hit his head. 
//       Mama called the doctor and the doctor said. No more monkeys jumping on the bed!`
//       : `All the monkeys fell off`;
//   return (
//     <div>
//       <p>{totalMonkeys}</p>
//       <button onClick={() => setMonkeyCount(monkeyCount - 1)}>Click</button>
//       {monkeyCount <= 0 ? (
//         <button onClick={() => setMonkeyCount(10)}>Reset</button>
//       ) : null}
//     </div>
//   );
// };

export default TenLittleMonkeys;
