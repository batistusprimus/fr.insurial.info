import { NextRequest, NextResponse } from 'next/server';

// Interface pour les données du formulaire
interface LeadData {
  // Step 1 - Need
  coverageType: string[];
  location: string;
  budget: string;
  timeline: string;
  
  // Step 2 - Profile  
  companySize: string;
  industry: string;
  // Nouveau: type d'assurance mentionné dans le formulaire simple
  insuranceInterest?: string;
  currentProvider: string;
  
  // Step 3 - Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  
  // Step 4 - Consent
  gdprConsent: boolean;
  
  // UTM & tracking
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_adset?: string;
  utm_ad?: string;
  userAgent?: string;
  timestamp?: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();
    
    // Validation basique
    if (!data.fullName || !data.workEmail || !data.phone || !data.gdprConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validation email professionnel
    const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const emailDomain = data.workEmail.split('@')[1]?.toLowerCase();
    if (emailDomains.includes(emailDomain)) {
      return NextResponse.json(
        { error: 'Please use a professional email address' },
        { status: 400 }
      );
    }
    
    // Enrichir les données avec des métadonnées
    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: 'insurial.info',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };
    
    // Log pour développement (remplacer par vraie DB en production)
    console.log('New lead received:', {
      email: enrichedData.workEmail,
      company: enrichedData.fullName,
      coverage: enrichedData.coverageType,
      location: enrichedData.location,
      timestamp: enrichedData.timestamp,
      utm: {
        source: enrichedData.utm_source,
        medium: enrichedData.utm_medium,
        campaign: enrichedData.utm_campaign,
      }
    });
    
    // TODO: Intégrer avec vraie base de données
    // Exemples d'intégrations possibles :
    // - Supabase: await supabase.from('leads_insurial').insert(enrichedData)
    // - PostgreSQL: await db.query('INSERT INTO leads_insurial...', enrichedData)
    // - MongoDB: await collection.insertOne(enrichedData)
    // - Webhook vers BPC: await fetch('https://api.bpcorp.eu/leads', { method: 'POST', body: JSON.stringify(enrichedData) })
    
    // Simuler une sauvegarde réussie
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Optionnel: Envoyer notification par email
    // await sendNotificationEmail(enrichedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received successfully',
        leadId: `INS-${Date.now()}` // ID temporaire
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Méthodes non autorisées
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
