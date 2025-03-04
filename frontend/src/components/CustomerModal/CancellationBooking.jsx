import React, { useState } from "react";
import "./CancellationBooking.scss";

const CancellationBooking = ({ onConfirm, onCancel }) => {
  return (
    <div className="cancel-modal-container">
      <div className="cancel-modal-content">
        <h2>Booking Cancellation</h2>
        <div className="cancel-main-content">
          <p>Are you sure you want to cancel your booking reservation?</p>
          <button className="confirm-btn btn mx-3" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-btn btn mx-3" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancellationBooking;
