import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const backendUrl = 'http://emrisvsschedularint.emri.in/face_mismatch/records';
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers, // Forward client headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Backend error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch from backend', details: error.message });
  }
}