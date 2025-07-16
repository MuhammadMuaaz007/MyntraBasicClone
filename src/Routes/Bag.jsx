
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";


const bag = () => {
    const bagItems=useSelector(state =>  state.bag);
    const items=useSelector(state => state.items);
    const finalItems=items.filter(item=>{
      const itemIndex=bagItems.indexOf(item.id);
      return itemIndex>=0;
    })
  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item=> <BagItem item={item} />)}
           
          </div>
          <BagSummary />
        </div>
      </main>
    </div>
  );
};

export default bag;
