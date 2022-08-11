interface PageProps {
    props: {
        data: JSON
    }
}

// http://192.168.178.71/

export async function Login(username: string, password: string) {
    return getData<{
        accessToken: string
    }>('user/login', {username, password});
}

export async function Register(username: string, password: string, firstName: string, lastName: string) {
    return getData<{
        first_name: string
    }>('user/register');
}

async function getData<T>(endpoint: string, body: any = undefined) {
    console.log(body);

    if(body){
        body = JSON.stringify(body)
        console.log('b', body)
    }
    
    const res = await fetch(`http://192.168.178.71:3001/${endpoint}`, {
        method: body ? 'POST' : 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        body
    });

    let data: T | null = null;
    try {
        data = (await res.json()) as T;
    } catch (error) {
        console.error('Failed to get data', error);
    }
   
    return {
        props: {
            data
        }
    }
}
