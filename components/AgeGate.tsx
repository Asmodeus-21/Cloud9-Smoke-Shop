
import React from 'react';

interface AgeGateProps {
  onVerify: () => void;
  onReject: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify, onReject }) => {
  console.log('AgeGate rendering');
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'rgba(76, 106, 189, 0.1)',
          filter: 'blur(120px)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'rgba(76, 106, 189, 0.05)',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }}></div>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 50,
        width: '100%',
        maxWidth: '512px',
        padding: '40px',
        borderRadius: '24px',
        textAlign: 'center',
        background: '#FFFFFF',
        backdropFilter: 'blur(12px)',
        border: '1px solid #E5E5E5'
      }}>
        <div style={{
          marginBottom: '32px',
          display: 'inline-block',
          padding: '16px',
          borderRadius: '16px',
          backgroundColor: '#F5F5F5',
          border: '1px solid #E5E5E5',
          margin: '0 auto'
        }}>
          <svg style={{ width: '48px', height: '48px', color: '#4C6ABD' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#090A0B'
        }}>
          Age Verification
        </h2>
        
        <p style={{ color: '#666666', fontSize: '18px', marginBottom: '40px', lineHeight: '1.5' }}>
          Cloud9 Smoke Shop strictly complies with California state law. You must be 21 years or older to enter this site and purchase tobacco/vape products.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={onVerify}
            style={{
              padding: '16px 40px',
              background: '#4C6ABD',
              borderRadius: '16px',
              fontWeight: '600',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(76,106,189,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            I am 21 or older
          </button>
          <button
            onClick={onReject}
            style={{
              padding: '16px 40px',
              background: '#F5F5F5',
              borderRadius: '16px',
              fontWeight: '600',
              color: '#666666',
              border: '1px solid #E5E5E5',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E5E5E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F5F5F5';
            }}
          >
            Exit Site
          </button>
        </div>
        
        <p style={{ marginTop: '32px', fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Proudly Serving Ukiah, California
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
