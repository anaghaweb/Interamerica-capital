import {NextResponse} from 'next/server';
import {google} from 'googleapis';

const POST  = async  (request: Request) => {

    const body = await request.json();
    

    try{
            const auth = new google.auth.GoogleAuth({
                credentials:{
                    client_email:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
                },
                scopes:[
                    'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
                ]
            });

            const sheets = google.sheets({
                auth,
                version:'v4'
            });

            const response = await sheets.spreadsheets.values.append({
                spreadsheetId:process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
                range:'A1:F1',
                valueInputOption:'USER_ENTERED',
                requestBody:{
                    values:[
                    [body.date, body.firstname, body.lastname, body.email, body.subject, body.message,  ]
            ]}
            })

            return NextResponse.json({
                data:response.data
            })
    }
    catch(error){

    }
    
}

export {POST};