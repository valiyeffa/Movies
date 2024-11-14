import supabase from "../../utils/supabase"

export const movieAction = (movie) => ({
    type: "MOVIE",
    movie
})

export const movieAddToDataBase_Action = async (movies) => {
    const { data, error } = await supabase.from('Movies').insert(movies);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}

export const movieEdittoDataBase_Action = async(id, update) => {
    const { data, error } = await supabase.from('Movies').update(update).eq("id", id);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}

export const movieDelToDataBase_Action = async (id) => {
    const { data, error } = await supabase.from('Movies').delete().eq("id", id);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}

