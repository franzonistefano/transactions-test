import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./routing/AppRouter";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";

const App = (props: any) => {
  const [dialog, setDialog] = useState({
    visible: false
  })

  const serviceWorkerReducer = useSelector(
    (state: any) => state.serviceWorkerReducer,
  );

  useEffect(() => {
    if (serviceWorkerReducer.serviceWorkerUpdated)
      setDialog({
        ...dialog,
        visible: true
      })

  }, [serviceWorkerReducer.serviceWorkerUpdated])

  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerReducer.serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

      registrationWaiting.addEventListener('statechange', (e: any) => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }

    onHide()
  };

  const renderFooter = () => {
    return (
      <div>
        <Button label="Yes" icon="pi pi-check" onClick={() => updateServiceWorker()} autoFocus />
      </div>
    );
  }

  const onHide = () => {
    setDialog({
      ...dialog,
      visible: false
    })
  }

  return (
    <div className='GeneralStyle'>
      <AppRouter />
      {serviceWorkerReducer.serviceWorkerUpdated && (
        <div className="p-col-12 p-md-3">
          <Dialog visible={dialog.visible} style={{ width: '50vw' }} footer={renderFooter()} onHide={() => onHide()}>
            <p>There is a new version available!</p>
          </Dialog>
        </div>
      )}
    </div>
  )
}

export default App