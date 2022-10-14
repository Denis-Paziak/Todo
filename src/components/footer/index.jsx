import React from 'react';
import { connect } from 'react-redux';

function Footer({ switchStatus }) {
    return (
        <div className='footer'>
            <div className="list">

                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6491 0.863051H11.689L11.5686 0.322474C11.5273 0.134115 11.3599 0 11.1669 0H7.83247C7.63947 0 7.47275 0.134115 7.43077 0.322474L7.31103 0.863051H4.35024C3.26719 0.863051 2.38658 1.74398 2.38658 2.82703V17.0361C2.38658 18.1191 3.26719 19 4.35024 19H14.6492C15.7322 19 16.6135 18.1191 16.6135 17.0361V2.82703C16.6134 1.74398 15.7322 0.863051 14.6491 0.863051ZM15.3298 17.036C15.3298 17.4112 15.0246 17.7164 14.6491 17.7164H4.3502C3.97538 17.7164 3.67014 17.4112 3.67014 17.036V2.82703C3.67014 2.45189 3.97538 2.14669 4.3502 2.14669H7.0258L6.95752 2.45379C6.92991 2.57567 6.96002 2.70353 7.03775 2.80072C7.11605 2.89819 7.23455 2.95489 7.35922 2.95489H11.6407C11.7654 2.95489 11.8839 2.89819 11.9616 2.80072C12.0399 2.70325 12.07 2.57571 12.0424 2.45379L11.9741 2.14669H14.6491C15.0246 2.14669 15.3298 2.45193 15.3298 2.82703V17.036Z" fill="#E0E1DD" />
                    <path d="M6.89484 7.60482H8.64035L8.22549 7.32154C7.64004 6.92202 7.48966 6.12314 7.8895 5.53776C8.28878 4.95299 9.0879 4.80164 9.67328 5.20181L9.74165 5.2485V4.7587C9.74165 4.44123 9.48403 4.18365 9.16684 4.18365H6.89484C6.57773 4.18365 6.32011 4.44127 6.32011 4.7587V7.02978C6.32011 7.34729 6.57773 7.60482 6.89484 7.60482Z" fill="#E0E1DD" />
                    <path d="M12.2393 4.45219L10.2274 6.35693L9.31105 5.73176C9.01962 5.53149 8.61969 5.60733 8.41914 5.89973C8.2192 6.19238 8.29443 6.59166 8.58777 6.7916L9.93094 7.70885C10.0406 7.78409 10.1666 7.82073 10.2926 7.82073C10.4524 7.82073 10.611 7.76124 10.7339 7.64493L13.1218 5.38422C13.3794 5.14073 13.39 4.73427 13.1468 4.47697C12.9024 4.21968 12.4968 4.2087 12.2393 4.45219Z" fill="#E0E1DD" />
                    <path d="M6.89484 12.0138H8.641L8.22549 11.7302C7.64004 11.3306 7.48966 10.5318 7.8895 9.94645C8.28878 9.36132 9.0879 9.20997 9.67328 9.61046L9.74165 9.6572V9.16739C9.74165 8.84996 9.48403 8.59235 9.16684 8.59235H6.89484C6.57773 8.59235 6.32011 8.84996 6.32011 9.16739V11.4388C6.32011 11.7562 6.57773 12.0138 6.89484 12.0138Z" fill="#E0E1DD" />
                    <path d="M12.2393 8.86116L10.2274 10.7656L9.31105 10.1404C9.01962 9.93981 8.61969 10.0154 8.41914 10.3084C8.2192 10.6011 8.29443 11.0003 8.58777 11.2003L9.93094 12.1175C10.0406 12.1928 10.1666 12.2294 10.2926 12.2294C10.4524 12.2294 10.611 12.1698 10.7339 12.0536L13.1218 9.79318C13.3794 9.54969 13.39 9.14355 13.1468 8.88594C12.9024 8.6286 12.4968 8.61795 12.2393 8.86116Z" fill="#E0E1DD" />
                    <path d="M9.16684 13.0013H6.89484C6.57773 13.0013 6.32011 13.2589 6.32011 13.5763V15.8474C6.32011 16.1648 6.57773 16.4224 6.89484 16.4224H9.16684C9.48403 16.4224 9.74165 16.1648 9.74165 15.8474V13.5763C9.74165 13.2589 9.48403 13.0013 9.16684 13.0013Z" fill="#E0E1DD" />
                    <defs>
                        <rect width="19" height="19" fill="white" />
                    </defs>
                </svg>

            </div>
            <div className="add" onClick={switchStatus}>
                +
            </div>
            <div className="theme">

                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 15.5C24 22.1274 18.6274 27.5 12 27.5C5.37258 27.5 0 22.1274 0 15.5C0 8.87258 9.37258 0 16 0C22.6274 0 24 8.87258 24 15.5Z" fill="#E0E1DD" />
                </svg>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        switchStatus: () => dispatch({ type: 'StatusAddForm' })
    }
}

export default connect(null, mapDispatchToProps)(Footer);