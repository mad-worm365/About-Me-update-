import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// const client = new MongoClient(
//     "mongodb+srv://rorifloris78:q4y2RYKbCkfgr4W2@cluster0.3brv2.mongodb.net"
// );
const dbName = "sanjiIpInfos";
const collectionName = "ips";

const discordWebhookUrl =
    "https://discord.com/api/webhooks/1435266204716498986/G67zvUP16qfSMe9fOB1XUY2kQWhH2a5qrowk_VRLr30Kav7F56EMOyZEjAZ6FJ2bfpBm";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "";

    if (!ip) {
        console.error("Unable to determine client IP address.");
        return new NextResponse("Unable to determine client IP address.", {
            status: 400,
        });
    }

    const response = await fetch(
        `https://proxycheck.io/v2/${ip}?key=0107019648852ab4-9069664a-ad63-41af-bb59-57fc32e264ca-000000?vpn=1&asn=1`
    );
    const data = await response.json();

    console.log(data);

    const isVPN = data[ip].type;
    const location = data[ip].country;
    const full_data = data[ip];

    const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tokyo",
        hour12: false,
    });

    const document = {
        ip,
        isVPN,
        location,
        full_data,
        timestamp,
    };

    try {
        // await client.connect();
        // const database = client.db(dbName);
        // const collection = database.collection(collectionName);
        // await collection.insertOne(document);
        // console.log("Data inserted successfully!");

        const discordMessage = {
            content: `Sanji's portfolio is checked by:
        **IP:** \`\`\`${ip}\`\`\`
        **VPN:** ${isVPN}
        **Proxy:** ${full_data.proxy}
        **Country:** ${full_data.country || "N/A"}
        **Region:** ${full_data.region || "N/A"}
        **City:** ${full_data.city || "N/A"}
        **Timestamp:** ${timestamp}
        https://www.ip2location.io/
        If vpn is business and proxy is no, in this case check that IP on ip2location.io.
        Or if you think you need to check double check, check on ip2location.io.
        `,
        };

        const discordResponse = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(discordMessage),
        });

        if (discordResponse.ok) {
            console.log("Message sent to Discord!");
        } else {
            console.error(
                "Failed to send message to Discord:",
                discordResponse.status
            );
        }
    } catch (error) {
        console.error(
            "Error inserting data into MongoDB or sending to Discord",
            error
        );
    } finally {
        // await client.close();
    }

    return NextResponse.json(
        {
            ip,
            isVPN,
        },
        { status: 200 }
    );
}
