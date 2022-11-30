import React from "react";

const AddChargeForm =
  React.lazy(() =>
    import('shared_components/add-charge-form')
  );

const AddCharge = () => {
    return (
        <div>
            <React.Suspense fallback='Loading Button'>
                <AddChargeForm />
            </React.Suspense>
        </div>

    );
}

export default AddCharge;