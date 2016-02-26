<script src="yourlibpath/socket.io.js"></script>

<script type="text/javascript">
    var socket = io.connect('http://socket.coincap.io');

    socket.on('trades', function (tradeMsg) {
        console.log(tradeMsg);
    })

    socket.on('global', function (globalMsg) {
        console.log(globalMsg);
    })
</script>
