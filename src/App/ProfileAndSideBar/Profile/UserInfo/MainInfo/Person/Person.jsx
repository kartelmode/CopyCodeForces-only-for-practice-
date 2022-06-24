import React from 'react'
import PersonStyle from './Person.module.css'

export default function Person({firstName, lastName, country, city, organization}) {
    function getCountryAndCity() {
        return (
             (city !== undefined ? city + ', ' + country
                                 : country)
        )
    }

    function getFirstAndLastNames() {
        return (
            (firstName !== undefined ? firstName
                                     : '') + 
            (lastName !== undefined ? (firstName !== undefined ? ' ' : '') + lastName
                                    : '')
        )
    }

    function Combine(Who, Lives) {
        return (
            (Who !== '' ? Who + (Lives !== '' ? ', ' + Lives : '')
                        : Lives)
        )
    }

    function getOrganization() {
        return (
            (organization !== undefined && organization != '' ? 'From ' + organization
                                                              : '')
        )
    }

    return (
        <div className={PersonStyle.person}>
            {Combine(getFirstAndLastNames(), getCountryAndCity())}
            <div>
                {getOrganization()}
            </div>
        </div>
    )
}
