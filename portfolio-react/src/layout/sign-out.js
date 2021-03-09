const SignOut = () => {

    return (
        <div className="modal fade" id="signOutConfirmation" data-backdrop="static" data-keyboard="false" tabIndex="-1"
             aria-labelledby="signOutConfirmationLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signOutConfirmationLabel">Sign Out Confirmation</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to sign out?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, take me back</button>
                        <a href="/" className="btn btn-primary" role="button" aria-pressed="true">Yes, sign me out</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignOut;
