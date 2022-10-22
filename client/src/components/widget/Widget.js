import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";


const Widget = () => {
    const { user } = useContext(UserContext);
    console.log(user.isAdmin)
    const userWidget = [
        {
            title: "this thing",
            number: 3,
            link: "www.google.com",
            info: "something",
            alt: "alt icon",
            icon: ""
        },
        {
            title: "this thing",
            number: 3,
            link: "www.google.com",
            info: "something",
            alt: "alt icon",
            icon: ""
        }
    ];
    const adminWidget = [
        {
            title: "this other thing",
            number: 3,
            link: "www.google.com",
            info: "something",
            alt: "alt icon",
            icon: ""
        },
        {
            title: "this thing",
            number: 3,
            link: "www.google.com",
            info: "something",
            alt: "alt icon",
            icon: ""
        }
    ];
    return (
        <>
            {!user.isAdmin ? adminWidget
                .map((data) => (
                    <div className="widget" key={data.name}>
                        <div className='widget-left'>
                            <p className='widget-title'>{data.title}</p>
                            <p className='widget-number'>Number of widget</p>
                            <p className='widget-link'>Link to another page</p>
                        </div>
                        <div className='widget-right'>
                            <p className='widget-info'>Widget info</p>
                            <p className='widget-alt'>Alt widget</p>
                            <p className='widget-icon'>Icon</p>
                        </div>

                    </div>
                ))
                : <p>error things</p>
            }
        </>
    )
}
export default Widget
