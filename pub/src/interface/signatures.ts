import * as _pi from 'pareto-core-interface'

import * as resources from "./resources"
import * as resources_exupery from "exupery-resources/dist/interface/resources"

export namespace queries {
    
    export type on_completion = _pi.Query_Function<resources.queries.on_completion, {
        'read file': resources_exupery.queries.read_file
    }>

    export type on_hover = _pi.Query_Function<resources.queries.on_hover, {
        'read file': resources_exupery.queries.read_file
    }>

    export type validate_document = _pi.Query_Function<resources.queries.validate_document, {
        'read file': resources_exupery.queries.read_file
    }>

}