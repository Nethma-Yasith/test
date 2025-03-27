import React, { useState } from 'react';

function Home() {
    const [activeTab, setActiveTab] = useState('History');

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f6fa' }}>
            {/* Patient Profile Header */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '20px', color: '#333' }}>Patient Profile</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '36px', color: '#888' }}>
                        👤
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#333' }}>Sarah Johnson</h3>
                        <p style={{ margin: '0', color: '#666' }}>NIC: 970123-45-6789</p>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <p style={{ margin: '0', color: '#666' }}>Age: 27</p>
                        <p style={{ margin: '0', color: '#666' }}>Gender: Female</p>
                        <p style={{ margin: '0', color: '#666' }}>Address: 123 Medical Avenue, Healthcare City, 54321</p>
                        <p style={{ margin: '0', color: '#666' }}>Category: Outpatient</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', backgroundColor: '#fff', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                {['History', 'Investigations', 'Orders', 'Drugs', 'Ward', 'Surgery'].map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            marginRight: '20px',
                            cursor: 'pointer',
                            color: activeTab === tab ? '#007BFF' : '#666',
                            fontWeight: activeTab === tab ? 'bold' : 'normal',
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'History' && (
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    {/* Patient History Section */}
                    <h3 style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>Patient History</h3>
                    <div style={{ backgroundColor: '#f0f8ff', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <strong>Medical Summary:</strong> Patient has a history of asthma and seasonal allergies. Regular follow-up maintained. Last acute episode: March 2023.
                    </div>

                    {/* Timeline */}
                    {[
                        {
                            date: 'May 15, 2023',
                            title: 'Annual Check-up',
                            description: 'Regular check-up. Patient reports good compliance with maintenance inhaler. No acute asthma episodes in the past 3 months.',
                            medications: ['Albuterol Inhaler', 'Loratadine 10mg'],
                            tag: 'Check-up',
                            tagColor: '#007BFF',
                        },
                        {
                            date: 'March 3, 2023',
                            title: 'Emergency Visit',
                            description: 'Acute asthma exacerbation. Patient presented with wheezing and shortness of breath. Responded well to nebulizer treatment.',
                            medications: ['Albuterol Nebulizer', 'Prednisone 40mg'],
                            tag: 'Emergency',
                            tagColor: '#FF4D4F',
                        },
                        {
                            date: 'January 15, 2023',
                            title: 'Follow-up Visit',
                            description: 'Post-emergency follow-up. Symptoms have improved. Adjusted medication dosage.',
                            medications: ['Albuterol Inhaler', 'Fluticasone 250mcg'],
                            tag: 'Follow-up',
                            tagColor: '#52C41A',
                        },
                    ].map((entry, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e6f7ff', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontSize: '20px', color: '#007BFF' }}>
                                    📅
                                </div>
                                <div>
                                    <strong>{entry.date}</strong>
                                    <span style={{ marginLeft: '10px', padding: '2px 8px', backgroundColor: entry.tagColor, color: '#fff', borderRadius: '5px', fontSize: '12px' }}>
                                        {entry.tag}
                                    </span>
                                </div>
                            </div>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#333' }}>{entry.title}</h4>
                            <p style={{ margin: '0 0 5px 0', color: '#666' }}>{entry.description}</p>
                            <p style={{ margin: '0', color: '#666' }}>
                                <strong>Medications Prescribed:</strong> {entry.medications.join(', ')}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'Orders' && (
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>Generate Order Form</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Priority Level</label>
                        <select style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
                            <option>Normal Priority</option>
                            <option>High Priority</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Additional Notes</label>
                        <textarea style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} placeholder="Add any special instructions or notes..."></textarea>
                    </div>
                    {['Imaging', 'Laboratory', 'Cardiology', 'Respiratory'].map((category, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h4 style={{ marginBottom: '10px', fontSize: '16px', color: '#333' }}>{category}</h4>
                            {category === 'Imaging' && ['MRI Scan', 'CT Scan', 'X-ray', 'Ultrasound'].map((test, idx) => (
                                <div key={idx} style={{ marginBottom: '5px' }}>
                                    <label>
                                        <input type="checkbox" style={{ marginRight: '10px' }} />
                                        {test} <span style={{ color: '#007BFF', fontSize: '12px' }}>Common</span>
                                    </label>
                                </div>
                            ))}
                            {category === 'Laboratory' && ['Complete Blood Count', 'Comprehensive Metabolic Panel', 'Lipid Panel', 'Thyroid Function Tests'].map((test, idx) => (
                                <div key={idx} style={{ marginBottom: '5px' }}>
                                    <label>
                                        <input type="checkbox" style={{ marginRight: '10px' }} />
                                        {test} <span style={{ color: '#007BFF', fontSize: '12px' }}>Common</span>
                                    </label>
                                </div>
                            ))}
                            {category === 'Cardiology' && ['ECG', 'Echocardiogram', 'Stress Test'].map((test, idx) => (
                                <div key={idx} style={{ marginBottom: '5px' }}>
                                    <label>
                                        <input type="checkbox" style={{ marginRight: '10px' }} />
                                        {test} <span style={{ color: '#007BFF', fontSize: '12px' }}>Common</span>
                                    </label>
                                </div>
                            ))}
                            {category === 'Respiratory' && ['Pulmonary Function Test', 'Oxygen Saturation Test'].map((test, idx) => (
                                <div key={idx} style={{ marginBottom: '5px' }}>
                                    <label>
                                        <input type="checkbox" style={{ marginRight: '10px' }} />
                                        {test} <span style={{ color: '#007BFF', fontSize: '12px' }}>Common</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Generate PDF
                    </button>
                </div>
            )}

            {/* Floating Action Button */}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#007BFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '30px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                +
            </div>
        </div>
    );
}

export default Home;