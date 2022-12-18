class NetWork {
    clientHp=10;
    hpChecker=0;
    constructor() {
        this.socket = new WebSocket("ws://10.10.10.57:8467");
        const client = this;
        this.socket.onopen = function (event) {
            console.log("Connected to server");
            document.getElementById('disconnect').style.display='none';
            deactivateLoading()
            client.hpChecker = setInterval(()=>{
                client.tx({action:'ping'});
                client.clientHp-=1;
                if (client.clientHp<=0){
                    document.getElementById('disconnect').style.display='';
                    clearInterval(client.hpChecker);

                }
            },1000);
        };

        this.socket.onmessage = function (event) {
            var msg = JSON.parse(event.data);
            console.log(msg)
            client.process(msg)
            // document.getElementById("seqResult").innerHTML = String(msg);

        };
        // console.log('inside main')
    }

    process(msg) {
        const action = msg.action;
        const parameters = msg.parameters;
        console.log(action);
        switch (action) {
            case 'indexBySeq_Re':
                refreshPrimaryIndexerResult(parameters.data)
                break;
            case 'indexBySeqExact_Re':
                console.log(msg);
                refreshprecisionIndexerResult(parameters.data)
                break;
            case 'align':
                console.log(msg);
                refreshAlign(parameters.data)
                break;
            case 'pong':
                console.log(this.clientHp);
                if(this.clientHp<=999){
                    this.clientHp+=100;
                }
                break;

            default:
                console.log(msg)
                break;

        }
        return;
    }

    tx(msg) {

        this.socket.send(JSON.stringify(msg));



    }

    exit() {
        exampleSocket.close();

    }
}