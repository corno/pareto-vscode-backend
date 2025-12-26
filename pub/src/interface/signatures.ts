import * as _et from 'exupery-core-types'

import * as resources from "./resources"
import * as resources_exupery from "exupery-resources/dist/interface/resources"

export namespace queries {
    
    export type on_completion = _et.Query_Function<resources.queries.on_completion, {
        'read file': resources_exupery.queries.read_file
    }>

    export type on_hover = _et.Query_Function<resources.queries.on_hover, {
        'read file': resources_exupery.queries.read_file
    }>

    export type validate_document = _et.Query_Function<resources.queries.validate_document, {
        'read file': resources_exupery.queries.read_file
    }>

}