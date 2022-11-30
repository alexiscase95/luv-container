import React from "react";

const SignUpForm =
  React.lazy(() =>
    import('shared_components/sign-up-form')
  );

const SignIn = () => {
    return (
        <div>
            <React.Suspense fallback='Loading Button'>
                <SignUpForm />
            </React.Suspense>
        </div>

    );
}

export default SignIn;