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
    const webhookUrl = 'https://hook.eu1.make.com/onyhfuai5sqn8iv6zcwpgju8u3ljwq4i';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'ВИАНТПРОМ Заявка'
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send lead: ${response.statusText}`);
    }

    // Make webhook generally returns a text like 'Accepted', so we can return text or a simple success object.
    return { success: true };
  } catch (error) {
    console.error('Lead service error:', error);
    throw error;
  }
}
