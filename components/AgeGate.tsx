
import React from 'react';

interface AgeGateProps {
  onVerify: () => void;
  onReject: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify, onReject }) => {
  console.log('AgeGate rendering');
  return (
    <div className="age-gate-container">
      <style>{`
        .age-gate-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .age-gate-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        .age-gate-blur-1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: rgba(76, 106, 189, 0.1);
          filter: blur(120px);
          border-radius: 50%;
        }
        .age-gate-blur-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: rgba(76, 106, 189, 0.05);
          filter: blur(100px);
          border-radius: 50%;
        }
        .age-gate-modal {
          position: relative;
          z-index: 50;
          width: 100%;
          max-width: 512px;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          background: #FFFFFF;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid #E5E5E5;
        }
        .age-gate-icon-wrapper {
          margin-bottom: 32px;
          display: inline-block;
          padding: 16px;
          border-radius: 16px;
          background-color: #F5F5F5;
          border: 1px solid #E5E5E5;
        }
        .age-gate-icon {
          width: 48px;
          height: 48px;
          color: #4C6ABD;
        }
        .age-gate-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          color: #090A0B;
        }
        .age-gate-description {
          color: #666666;
          font-size: 18px;
          margin-bottom: 40px;
          line-height: 1.5;
        }
        .age-gate-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
        }
        .age-gate-btn-primary {
          padding: 16px 40px;
          background: #4C6ABD;
          border-radius: 16px;
          font-weight: 600;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          min-height: 44px;
          min-width: 44px;
        }
        .age-gate-btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(76, 106, 189, 0.4);
        }
        .age-gate-btn-primary:active {
          transform: scale(0.98);
        }
        .age-gate-btn-secondary {
          padding: 16px 40px;
          background: #F5F5F5;
          border-radius: 16px;
          font-weight: 600;
          color: #666666;
          border: 1px solid #E5E5E5;
          cursor: pointer;
          transition: all 0.2s;
          min-height: 44px;
          min-width: 44px;
        }
        .age-gate-btn-secondary:hover {
          background: #E5E5E5;
        }
        .age-gate-btn-secondary:active {
          background: #D5D5D5;
        }
        .age-gate-footer {
          margin-top: 32px;
          font-size: 12px;
          color: #999999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        /* Touch-friendly on mobile */
        @media (hover: none) and (pointer: coarse) {
          .age-gate-btn-primary,
          .age-gate-btn-secondary {
            font-size: 16px;
            padding: 16px 32px;
          }
        }
      `}</style>
      <div className="age-gate-bg">
        <div className="age-gate-blur-1"></div>
        <div className="age-gate-blur-2"></div>
      </div>
      
      <div className="age-gate-modal">
        <div className="age-gate-icon-wrapper">
          <svg className="age-gate-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h2 className="age-gate-title">
          Age Verification
        </h2>
        
        <p className="age-gate-description">
          Cloud9 Smoke Shop strictly complies with California state law. You must be 21 years or older to enter this site and purchase tobacco/vape products.
        </p>
        
        <div className="age-gate-buttons">
          <button
            onClick={onVerify}
            className="age-gate-btn-primary"
          >
            I am 21 or older
          </button>
          <button
            onClick={onReject}
            className="age-gate-btn-secondary"
          >
            Exit Site
          </button>
        </div>
        
        <p className="age-gate-footer">
          Proudly Serving Ukiah, California
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
