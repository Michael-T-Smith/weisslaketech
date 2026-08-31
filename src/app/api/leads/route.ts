import { NextResponse } from 'next/server';
import { isInServiceDistance } from '@/lib/zipcodes';
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

export async function POST(request: Request) {

    const body = await request.json();
     
    let inServiceDistance: boolean = isInServiceDistance(body.zip);
    
    if (body.deliveryPreference == 'onsite' && !inServiceDistance) {
        return NextResponse.json( {status: "rejected", message: "Job exists outside of service distance"});
    }

    let userData = `
    **Type**:\n ${body.customerType}
    **Location**:\n ${body.deliveryPreference}
    **Name**:\n ${body.name}
    **Business Name**:\n ${body.businessName || "[Omitted]"}
    **Contact Method**:\n ${body.preferredContactMethod}
    **Email**:\n ${body.email}
    **Phone**:\n ${body.phone || "[Omitted]"}
    **City**:\n ${body.city}
    **Zip**:\n ${body.zip}
    **Preferred Schedule**:\n ${body.preferredSchedule}
    **Job Type**:\n ${body.serviceCategory}
    **Description**:\n ${body.description}
`
    
    let discordData = {
        username: "Weiss Lake Tech Bot",
        content: "New Job Lead:",
        embeds: [
            {
                title: "Posted Lead:",
                description: userData
            }
        ]
    }

    let response = await fetch(DISCORD_WEBHOOK!, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(discordData),
    })
    

    if (response.ok) {
        return NextResponse.json({ status: "accepted", message: `We will review the details of the job and contact you shortly via ${body.preferredContactMethod}.` }); 
    } else {
        return NextResponse.json({ status: "accepted", message: "We have recieved your message, however our system has not forwarded it yet." })
    }
    
}