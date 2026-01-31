
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data"

export namespace Position_ {
    
    export type I = i_in.Position
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Position_ = (
    context: Position_.I,
) => Position_.O

export namespace Range_ {
    
    export type I = i_in.Range
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
) => Range_.O

export namespace Format_Options_ {
    
    export type I = i_in.Format_Options
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Format_Options_ = (
    context: Format_Options_.I,
) => Format_Options_.O

export namespace Text_Edit_ {
    
    export type I = i_in.Text_Edit
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Text_Edit_ = (
    context: Text_Edit_.I,
) => Text_Edit_.O

export namespace Replace_ {
    
    export type I = i_in.Replace
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Replace_ = (
    context: Replace_.I,
) => Replace_.O

export namespace Format_Result_ {
    
    export type I = i_in.Format_Result
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Format_Result_ = (
    context: Format_Result_.I,
) => Format_Result_.O

export namespace Format_Error_ {
    
    export type I = i_in.Format_Error
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Format_Error_ = (
    context: Format_Error_.I,
) => Format_Error_.O

export namespace Format_Parameters_ {
    
    export type I = i_in.Format_Parameters
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Format_Parameters_ = (
    context: Format_Parameters_.I,
) => Format_Parameters_.O

export namespace Sort_Alphabetically_Parameters_ {
    
    export type I = i_in.Sort_Alphabetically_Parameters
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Sort_Alphabetically_Parameters_ = (
    context: Sort_Alphabetically_Parameters_.I,
) => Sort_Alphabetically_Parameters_.O

export { 
    Position_ as Position, 
    Range_ as Range, 
    Format_Options_ as Format_Options, 
    Text_Edit_ as Text_Edit, 
    Replace_ as Replace, 
    Format_Result_ as Format_Result, 
    Format_Error_ as Format_Error, 
    Format_Parameters_ as Format_Parameters, 
    Sort_Alphabetically_Parameters_ as Sort_Alphabetically_Parameters, 
}
