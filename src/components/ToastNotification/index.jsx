import toast, { Toaster, ToastBar } from 'react-hot-toast';


const ToastNotification = () => {
    return (
        <Toaster
            position="bottom-right"
            reverseOrder={true}
            toastOptions={{
                className: 'shadow',
                style: {
                    backgroundColor: 'rgba(var(--bs-body-bg-rgb), 0.85)',
                    color: 'var(--bs-body-color)'
                }
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <>
                            {icon}
                            {message}
                            {t.type !== 'loading' && (
                                <button type="button" className="btn-close" onClick={() => toast.dismiss(t.id)}></button>
                            )}
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
}

export default ToastNotification;