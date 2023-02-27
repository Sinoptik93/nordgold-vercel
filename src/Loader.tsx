import type { FC } from 'react';
import "./loader.css"

const Loader: FC = () => {
 return (
     <div className="lds-roller">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
     </div>
 );
};

export { Loader };

