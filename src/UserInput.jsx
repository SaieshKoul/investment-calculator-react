
export default function UserInput({ inputChange, onChangeInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment"> Initial Investment</label>
                    <input onChange={onChangeInput} name="initialInvestment" value={inputChange.initialInvestment} type="number" id="initial-investment" required  />
                </p>
                <p>
                    <label htmlFor="annual-investment"> Annual Investment </label>
                    <input onChange={onChangeInput} name="annualInvestment" value={inputChange.annualInvestment} type="number" id="annual-investment" required  />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="expected-return"> Expected Return </label>
                    <input onChange={onChangeInput} name="expectedReturn" value={inputChange.expectedReturn} type="number" id="expected-return" required />
                </p>
                <p>
                    <label htmlFor="duration"> Duration </label>
                    <input onChange={onChangeInput} name="duration" value={inputChange.duration} type="number" id="duration" required  />
                </p>
            </div>
        </section>
    )
}
