export interface LeadData {
  category?: string;
  option?: string;
  urgency?: string;
  productCategory?: string;
  budget?: string;
  messenger?: string;
  rawMaterial?: string;
  packagingType?: string;
  productivity?: string;
  coatingType?: string;
  phone?: string;
  name?: string;
  contactName?: string;
}

export async function sendLead(data: LeadData) {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Lead service error:', error);
    throw error;
  }
}
