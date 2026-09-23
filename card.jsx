function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
                    alt="Profile"
                />
            </div>

            <div className="card-content">
                <h2>Karishma</h2>
                <p>React Developer</p>

                <button>View Profile</button>
            </div>
        </div>
    );
}

export default Card;