import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const [stateCovidReport, setStateCovidReport] = useState([]);
    const [totalCovidReport, setTotalCovidReport] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const setSearchValue = (e) => {
        setSearch(e.target.value);
    }

    const getFilterData = (searchValue) => {
        const data = stateCovidReport.filter(item => item.state.toLowerCase().includes(searchValue.toLowerCase()));
        return data;
    }

    const getCovidData = async () => {

        try {
            setLoading(true);
            const res = await fetch('https://data.covid19india.org/data.json');
            // user axios
            const actualData = await res.json();
            setStateCovidReport(actualData.statewise);
            setTotalCovidReport(actualData.statewise[0])

        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (stateCovidReport.length > 0 && search) {
            setStateCovidReport(getFilterData(search));
        }

        else if (!search) {
            getCovidData();
        }
    }, [search])

    if (loading) {
        return <h2>Loading....</h2>;
    }
    return (
        <div>
            <div className="heading_wrap">
                <h1>Live Covid Tracker</h1>
            </div>
            <section className="total_covid_report__wrap">
                <ul>
                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> OUR </span> COUNTRY</p>
                                <p className="card__total card_small">INDIA</p>
                            </div>

                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> TOTAL </span> RECOVERY</p>
                                <p className="card__total card_small">{totalCovidReport.recovered}</p>
                            </div>

                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> TOTAL </span> CONFIRMED</p>
                                <p className="card__total card_small">{totalCovidReport.confirmed}</p>
                            </div>

                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> TOTAL </span> DEATH</p>
                                <p className="card__total card_small">{totalCovidReport.deaths}</p>
                            </div>

                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                                <p className="card__total card_small">{totalCovidReport.active}</p>
                            </div>

                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner">
                                <p className="card__name"><span> TOTAL </span> UPDATED</p>
                                <p className="card__total card_small">{totalCovidReport.lastupdatedtime}</p>
                            </div>

                        </div>
                    </li>
                </ul>
            </section>

            <section className="covid_report_statewaise_wrap">
                <div>
                    <input type="text" className="search_box" onChange={setSearchValue} placeholder="search..." />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>active</td>
                            <td>confirmed</td>
                            <td>deatds</td>
                            <td>deltaconfirmed</td>
                            <td>deltadeatds</td>
                            <td>deltarecovered</td>
                            <td>lastupdatedtime</td>
                            <td>migratedotder</td>
                            <td>recovered</td>
                            <td>state</td>
                            <td>statecode</td>
                        </tr>
                    </thead>

                    <tbody>
                        {stateCovidReport.map((stateCovidReport, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{stateCovidReport.active}</td>
                                <td>{stateCovidReport.confirmed}</td>
                                <td>{stateCovidReport.deaths}</td>
                                <td>{stateCovidReport.deltaconfirmed}</td>
                                <td>{stateCovidReport.deltadeaths}</td>
                                <td>{stateCovidReport.deltarecovered}</td>
                                <td>{stateCovidReport.lastupdatedtime}</td>
                                <td>{stateCovidReport.migratedother}</td>
                                <td>{stateCovidReport.recovered}</td>
                                <td>{stateCovidReport.state}</td>
                                <td>{stateCovidReport.statecode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </section>
        </div>
    )
}

export default Covid
