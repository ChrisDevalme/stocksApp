import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'



export default function Dashboard (props) {
    const [stocks, setStocks] = useState([])

        //getTodos
        const getStocks = async () => {
            try{
                const response = await fetch('/api/stocks')
                /*
                look at app-server and see the /api/todos routes
                go to the routes identify the get request that goes to api/todos
                review the controllers and see that the controllers
                respond with an array of todos that are incomplete
                */
                const foundStocks = await response.json()
                // format to a js array or object. We reverse it because on retrieving it, the array will be in the opposite intended order.
                setStocks(foundStocks) // update state and cause diff algorithm to run
            } catch(error){
                console.error(error)
            }
        }
        useEffect(() => {
            getStocks()
        }, [])
  return (
    <div className="stocks">
      {stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};