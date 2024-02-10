import React from 'react';

export type TrianglePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export default function Triangle({ position, color }: { position: TrianglePosition; color: string; }) {
    // Define triangle styles based on position prop
    let triangleStyles;
    switch (position) {
        case 'top-left':
            triangleStyles = {
                borderLeft: `200px solid ${color}`,
                borderBottom: '200px solid transparent',
                borderRight: '200px solid transparent',
                left: 0,
                top: 0,
            };
            break;
        case 'top-right':
            triangleStyles = {
                borderRight: `200px solid ${color}`,
                borderBottom: '200px solid transparent',
                borderLeft: '200px solid transparent',
                right: 0,
                top: 0,
            };
            break;
        // <div className="w-0 h-0 absolute left-0 bottom-0" style={{
        //     borderTop: '200px solid transparent',
        //     borderRight: '200px solid transparent',
        //     borderLeft: '200px solid var(--primary)',
        // }}></div >
        case 'bottom-left':
            triangleStyles = {
                borderLeft: `200px solid ${color}`,
                borderTop: '200px solid transparent',
                borderRight: '200px solid transparent',
                left: 0,
                bottom: 0,
            };
            break;
        case 'bottom-right':
            triangleStyles = {
                borderRight: `200px solid ${color}`,
                borderTop: '200px solid transparent',
                borderLeft: '200px solid transparent',
                right: 0,
                bottom: 0,
            };
            break;
        default:
            triangleStyles = {
                borderTop: `200px solid ${color}`,
                borderRight: '200px solid transparent',
                borderLeft: '200px solid transparent',
                bottom: 0,
                right: 'auto',
            };
    }


    return <div className="w-0 h-0 absolute" style={triangleStyles}></div>;
}
