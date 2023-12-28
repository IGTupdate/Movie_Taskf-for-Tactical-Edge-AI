import { connect } from "@/database/connect";
import { getDataFromToken } from "@/helpers";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";



connect();
export async function GET(req) {
    try {
        console.log("hello");
        // const user = await getDataFromToken(req);

        // console.log(user);

        // const movies = await Movie.find();

        // console.log(movies)

        return NextResponse.json({
            message: "working"
        }, { status: 200 })
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 })
    }
}