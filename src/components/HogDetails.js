import React from "react"


function HogDetails({ hog }) {
   const { greased, weight, "highest medal achieved": medal } = hog

    return (

        <div className="description">
            <strong>{greased ? "Greased" : "Nongreased" }</strong>
            <p>
                Highest medal acieved: <strong>{medal}</strong>
            </p>
            <p>
                weigh as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refridgerator
                with Thru-the-Door Ice and Water: <strong>{weight}</strong>
            </p>

        </div>


    )
}


export default HogDetails