<h1>Customer Details</h1>

<div>
    <a href="/customers">Back</a>
</div>

<div>
    <strong>Name</strong>
    <p>{{ $customer->name }}</p>
</div>

<div>
    <strong>Email</strong>
    <p>{{ $customer->email }}</p>
</div>

<div>
    <a href="/customers/{{ $customer->id }}/edit">Edit</a>

    <form action="/customers/{{ $customer->id }}" method="post">
        @method('DELETE')
        @csrf
        <button>Delete</button>
    </form>
</div>
