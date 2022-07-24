import { createSignal } from "solid-js";
import { useParams } from "solid-app-router";
import toast, { Toaster } from "solid-toast";

const notify = () =>
  toast.success("Here is your toast.", {
    icon: "↘️",
    position: "bottom-right",
  });
const notifyTW = () =>
  toast.custom(
    (t) => (
      <div class="px-6 py-3 pr-12 bg-white rounded-full shadow-md font-medium relative">
        Custom JSX Content
        <button
          class="bg-gray-200/80 hover:bg-gray-300 flex justify-center top-1/2 -translate-y-1/2 items-center w-6 h-6 right-2.5 absolute rounded-full"
          onClick={() => toast.dismiss(t.id)}
        >
          &times;
        </button>
      </div>
    ),
    {
      duration: 1000,
      unmountDelay: 0,
    }
  );
import Header from "../components/Header";
// const params = useParams();

const dataTesting = [{ id: "1" }];

const [count, setCount] = createSignal(0);
const [dataTes, setDataTes] = createSignal("false");
const interval = setInterval(() => setCount((c) => c + 2), 2000);
const Home = () => {
  console.log("ini home");
  return (
    <>
      <Header title="Home" />
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              id = {useParams().id}
              <br />
              {count()}
              <br />
              {dataTesting[0].id}
              <br />
              {dataTes}
              <br />
              <button
                class="py-2 px-2 bg-sky-500 text-white rounded-lg"
                onClick={() => setDataTes("true")}
              >
                tombol
              </button>
              <button onClick={notify}>Make me a toast</button>
              <button onClick={notifyTW}>Make me a toast TW</button>
              <Toaster />
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
};

export default Home;
