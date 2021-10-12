// import React from 'react';

// import { Steps } from 'primereact/steps';
// import { Toast } from 'primereact/toast';
import { connect } from 'react-redux';
import NotFoundComponent from '../components/custom/NotFound/NotFoundComponent';
import { startGetPosts } from '../store/action/test';

const NotFoundContainer = (props: any) => {
    return (
        <NotFoundComponent 
            idTitle='app.notFound.title'
            idContent='app.notFound.text'
            idLink='app.notFound.link'
            linkTo='/home'
            onClick={() => props.getPosts()}
        />

    )

    // const [myToast, setMyToast] = useState<Toast | null>();
    // const [activeIndex, setActiveIndex] = useState(0)

    // const interactiveItems = [
    //     {
    //         label: 'Personal',
    //         command: (event: any) => {
    //             myToast?.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
    //         }
    //     },
    //     {
    //         label: 'Seat',
    //         command: (event: any) => {
    //             myToast?.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
    //         }
    //     },
    //     {
    //         label: 'Payment',
    //         command: (event: any) => {
    //             myToast?.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
    //         }
    //     },
    //     {
    //         label: 'Confirmation',
    //         pathname: '/',
    //         command: (event: any) => {
    //             history.push({ pathname: event.item.pathname })
    //         }
    //     }
    // ];

    // return (
    //     <div className="App">
    //         <h1>Toast Example</h1>
    //         <Toast ref={(el) => setMyToast(el)} />
    //         <Steps
    //             model={interactiveItems}
    //             activeIndex={activeIndex}
    //             onSelect={(e) => setActiveIndex(e.index)}
    //             readOnly={false} />
    //     </div>
    // );
}

const mapDispatchToProps = (dispatch:any) => ({
    getPosts: () => dispatch(startGetPosts())
})

export default connect(null,mapDispatchToProps)(NotFoundContainer)