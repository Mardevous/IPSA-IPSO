useEffect(() => {
    socket.on("connect", () => {
        console.log("Connecté :", socket.id)
    });

    return () => {
        socket.off("connect");
    };
}, []);

return (
    <div>
        <h1>IPSA</h1>
        <p>Connexion au serveur...</p>
    </div>
);

export default App;