import React from "react";  // import React (to provide access to TSX)

export function PhotoViewer({url}) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>               
            <img src={url} />
        </div>
    );
}